from django.db import models

#I don't know if the dateFields or BooleanFields 
#require parameter specifications
class Campaign(models.Model):
    url = models.TextField()
    campaign_id = models.DecimalField(max_digits=11, decimal_places=0)
    category = models.TextField()
    currency_code = models.TextField()
    current_amount = models.DecimalField(max_digits=10, decimal_places=0)
    goal = models.DecimalField(max_digits=10, decimal_places=0)
    donators = models.DecimalField(max_digits=11, decimal_places=0)
    days_active = models.DecimalField(max_digits=11, decimal_places=0)
    days_created = models.DecimalField(max_digits=11, decimal_places=0)
    title = models.TextField()
    description = models.TextField()
    user_first_name = models.TextField()
    user_last_name = models.TextField()
    visible_in_search = models.BooleanField(default=False)
    deactivated = models.BooleanField(default=False)
    is_launched = models.BooleanField(default=False)
    campaign_image_url = models.TextField()
    launch_date = models.TextField()
    campaign_hearts = models.DecimalField(max_digits=11, decimal_places=0)
    title = models.TextField()
    social_share_total = models.DecimalField(max_digits=11, decimal_places=0)
    social_share_last_update = models.TextField()
    location_city = models.TextField()
    location_country = models.TextField()
    is_charity = models.BooleanField(default=False)
    charity_name = models.TextField()

class Donation(models.Model):
    donation_id = models.DecimalField(max_digits=11, decimal_places=0)
    campaign_id = models.DecimalField(max_digits=11, decimal_places=0)
    total_donated = models.DecimalField(max_digits=11, decimal_places=0, default=0)
    num_donors = models.DecimalField(max_digits=11, decimal_places=0, default=0)


class Score(models.Model):
    campaign_id = models.DecimalField(max_digits=11, decimal_places=0)
    score = models.DecimalField(max_digits=5, decimal_places=0)
    rating = models.TextField()
