# Generated by Django 3.0.3 on 2020-04-09 00:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.TextField()),
                ('campaign_id', models.DecimalField(decimal_places=0, max_digits=11)),
                ('category', models.TextField()),
                ('currency_code', models.TextField()),
                ('current_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('goal', models.DecimalField(decimal_places=2, max_digits=10)),
                ('donators', models.DecimalField(decimal_places=0, max_digits=11)),
                ('days_active', models.DecimalField(decimal_places=0, max_digits=11)),
                ('days_created', models.DecimalField(decimal_places=0, max_digits=11)),
                ('description', models.TextField()),
                ('media_type', models.DecimalField(decimal_places=0, max_digits=5)),
                ('user_first_name', models.TextField()),
                ('user_last_name', models.TextField()),
                ('visible_in_search', models.BooleanField(default=False)),
                ('deactivated', models.BooleanField(default=False)),
                ('is_launched', models.BooleanField(default=False)),
                ('campaign_image_url', models.TextField()),
                ('launch_date', models.TextField()),
                ('campaign_hearts', models.DecimalField(decimal_places=0, max_digits=11)),
                ('title', models.TextField()),
                ('social_share_total', models.DecimalField(decimal_places=0, max_digits=11)),
                ('social_share_last_update', models.TextField()),
                ('location_city', models.TextField()),
                ('location_country', models.TextField()),
                ('is_charity', models.BooleanField(default=False)),
                ('charity_name', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('donation_id', models.DecimalField(decimal_places=0, max_digits=11)),
                ('campaign_id', models.DecimalField(decimal_places=0, max_digits=11)),
                ('total_donated', models.DecimalField(decimal_places=0, default=0, max_digits=11)),
                ('num_donors', models.DecimalField(decimal_places=0, default=0, max_digits=11)),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('campaign_id', models.DecimalField(decimal_places=0, max_digits=11)),
                ('score', models.DecimalField(decimal_places=0, max_digits=5)),
                ('rating', models.TextField()),
            ],
        ),
    ]
