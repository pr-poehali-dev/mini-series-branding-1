import json
import os
import base64
import urllib.request
from io import BytesIO
import boto3
from PIL import Image


def handler(event: dict, context) -> dict:
    '''Нарезает склеенную картинку брендбука (5 портретов) на отдельные файлы и загружает в S3'''
    method = event.get('httpMethod', 'GET')
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    src_url = 'https://cdn.poehali.dev/projects/618b8948-269c-40a7-94b5-dcdcf6308751/bucket/38e248ba-48d5-4026-a381-8f2f67ef279c.png'
    req = urllib.request.Request(src_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        raw = resp.read()

    img = Image.open(BytesIO(raw)).convert('RGB')
    W, H = img.size

    # Раскладка: верхний ряд из 3, нижний ряд из 2
    gap = int(W * 0.006)
    top_h = int(H * 0.503)

    top_w = (W - 2 * gap) // 3
    crops = {
        'portrait-1': (0, 0, top_w, top_h),
        'portrait-2': (top_w + gap, 0, 2 * top_w + gap, top_h),
        'portrait-3': (2 * (top_w + gap), 0, W, top_h),
    }

    bottom_y = top_h + gap
    bot_w = (W - gap) // 2
    crops['portrait-4'] = (0, bottom_y, bot_w, H)
    crops['portrait-5'] = (bot_w + gap, bottom_y, W, H)

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )

    urls = {}
    for name, box in crops.items():
        part = img.crop(box)
        buf = BytesIO()
        part.save(buf, format='JPEG', quality=92)
        buf.seek(0)
        key = f'brandbook/{name}.jpg'
        s3.put_object(Bucket='files', Key=key, Body=buf.getvalue(), ContentType='image/jpeg')
        urls[name] = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        'isBase64Encoded': False,
        'body': json.dumps({'urls': urls}),
    }
