from rest_framework import serializers

from api.models import Campaign, Donation, Update

# Serializers define the API representation.
class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = ['url','campaign_id','category','current_amount','currency_code','donators','days_active',
        'days_created','title','description','user_first_name','user_last_name','visible_in_search','deactivated','is_launched',
        'campaign_image_url','launch_date','campaign_hearts','social_share_total','social_share_last_update','location_city','location_country',
        'is_charity','charity_name']


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ['donation_id','campaign_id','total_donated','num_donors']

class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Update
        fields = ['update_id','campaign_id']
