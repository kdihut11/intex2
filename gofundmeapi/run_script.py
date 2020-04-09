import os 
os.environ['DJANGO_SETTINGS_MODULE'] = 'gofundmeapi.settings'

import django
django.setup()

import json
from api.models import Campaign, Donation, Score


def main():
    num = 0
    Campaign.objects.all().delete()
    Score.objects.all().delete()
    
    #create objects and store them in database
    with open('campaigns.json', encoding='utf-8') as json_file:
        data = json.load(json_file)
    campaigns = data['campaigns']
    for camp in campaigns:
        dbcamp = Campaign()
        dbcamp.url = camp['url']
        dbcamp.campaign_id = int(camp['campaign_id'])
        dbcamp.category = camp['goal']
        dbcamp.goal = int(camp['goal'])
        dbcamp.current_amount = int(camp['current_amount'])
        dbcamp.currency_code = camp['currencycode']
        dbcamp.donators = int(camp['donators'])
        dbcamp.days_active = int(camp['days_active'])
        dbcamp.days_created = int(camp['days_created'])
        dbcamp.title = camp['title']
        dbcamp.description = camp['description']
        dbcamp.user_first_name = camp['user_first_name']
        dbcamp.user_last_name = camp['user_last_name']

        if camp['visible_in_search'] == 'TRUE':
            dbcamp.visible_in_search = 'True'
        else:
            dbcamp.visible_in_search = 'False'

        if camp['deactivated'] == 'TRUE':
            dbcamp.deactivated = 'True'
        else:
            dbcamp.deactivated = 'False'

        if camp['is_launched'] == 'TRUE':
            dbcamp.is_launched = 'True'
        else:
            dbcamp.is_launched = 'False'

        dbcamp.campaign_image_url = camp['campaign_image_url']
        dbcamp.launch_date = camp['launch_date']
        dbcamp.campaign_hearts = int(camp['campaign_hearts'])
        dbcamp.social_share_total = int(camp['social_share_total'])
        dbcamp.social_share_last_update = camp['social_share_last_update']
        dbcamp.location_city = camp['location_city']
        dbcamp.location_country = camp['location_country']

        if camp['is_charity'] == 'TRUE':
            dbcamp.is_charity = 'True'
        elif camp['is_charity'] == 'FALSE':
            dbcamp.is_charity = 'False'

        dbcamp.charity_name = camp['charity_name']
        num = num + 1
        dbcamp.save()

    print(num)
    print('campaigns saved successfully')

    num = 0

    with open('scores.json', encoding='utf-8') as json_file:
        data = json.load(json_file)
    scores = data['scores']
    for sco in scores:
        dbsco = Score()
        dbsco.campaign_id = sco['campaign_id']
        dbsco.score = int(sco['Score'])
        dbsco.rating = sco['Rating']
        num = num + 1
        dbsco.save()

    print(num)
    print('updates saved')

if __name__ == '__main__':
    main()