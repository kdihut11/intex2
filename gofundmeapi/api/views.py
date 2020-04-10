from django.shortcuts import render

# Create your views here.
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from api.models import Campaign, Donation, Score
from api.serializers import CampaignSerializer, DonationSerializer, ScoreSerializer


class CampaignList(APIView):
    '''Get all campaigns or create a campaign'''
    @csrf_exempt
    def get(self, request, format=None):
        camps = Campaign.objects.all()
        if request.query_params.get('campaign_id'):
            camps = camps.filter(campaign_id__contains=request.query_params.get('campaign_id'))
        serializer = CampaignSerializer(camps, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        serializer = CampaignSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CampaignDetail(APIView):
    '''Work with an individual Campaign object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        camp = Campaign.objects.get(id=pk)
        serializer = CampaignSerializer(camp)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        camp = Campaign.objects.get(id=pk)
        serializer = CampaignSerializer(camp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class DonationList(APIView):
    '''Get all products or create a product'''
    @csrf_exempt
    def get(self, request, format=None):
        dons = Donation.objects.all()
        if request.query_params.get('donation_id'):
            dons = dons.filter(donation_id__contains=request.query_params.get('donation_id'))
        serializer = DonationSerializer(dons, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DonationDetail(APIView):
    '''Work with an individual Product object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        don = Donation.objects.get(id=pk)
        serializer = DonationSerializer(cat)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        don = Donation.objects.get(id=pk)
        serializer = DonationSerializer(cat, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ScoreList(APIView):
    '''Get all Scores or create a score'''
    @csrf_exempt
    def get(self, request, format=None):
        scos = Score.objects.all()
        if request.query_params.get('campaign_id'):
            scos = camps.filter(campaign_id__contains=request.query_params.get('campaign_id'))
        serializer = ScoreSerializer(scos, many=True)
        return Response(serializer.data)

    @csrf_exempt
    def post(self, request, format=None):
        serializer = ScoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ScoreDetail(APIView):
    '''Work with an individual Score object'''
    @csrf_exempt
    def get(self, request, pk, format=None):
        sco = Score.objects.get(id=pk)
        serializer = ScoreSerializer(sco)
        return Response(serializer.data)

    @csrf_exempt
    def put(self, request, pk, format=None):
        sco = Score.objects.get(id=pk)
        serializer = ScoreSerializer(sco, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateCampaign(APIView):
    @csrf_exempt
    def post(self, request, format=None):
        import urllib
        import json 
        body = json.loads(request.body)


        # Get Rating
        score = 0
        if body['media_type'] == "0":
            score = score + 35
        if body['media_type'] == "1":
            score = score + 50
        if body['media_type'] == "2":
            score = score + 25
        if body['media_type'] == "3":
            score = score + 20
        if body['visible_in_search'] == "True":
            score = score + 15
        if body['visible_in_search'] == "False":
            score = score + 7
        if body['currencycode'] == 'EUR':
            score = score + 15
        if not body['currencycode'] == 'EUR':
            score = score + 7
        if body['auto_fb_post_mode'] == "True":
            score = score + 10
        if body['auto_fb_post_mode'] == "False":
            score = score + 8
        if body['is_charity'] == "True":
            score = score + 10
        if body['is_charity'] == "False":
            score = score + 8
        if 50 <= score <= 69:
            rating = 'Poor'
        if 70 <= score <= 89:
            rating = 'Good'
        if 90 <= score <= 100:
            rating = 'Excellent'
        
        #formatting the data into a data object for the API call
        data =  {
                    "Inputs": {
                        "input1":
                        {
                            "ColumnNames": ["auto_fb_post_mode", "currencycode", "goal", "media_type", "visible_in_search", "is_charity", "avg_donation"],
                            "Values": [[ body['auto_fb_post_mode'], body['currencycode'], body['goal'], body['media_type'], body['visible_in_search'], body['is_charity'], "0" ],]
                        },
                    },
                    "GlobalParameters": {
                    }
                }

        # the API call
        body = str.encode(json.dumps(data))
        url = 'https://ussouthcentral.services.azureml.net/workspaces/8d7b88d4f64c47da88e35e4c3d3920aa/services/004dcd97f484426f8b0021098da53476/execute?api-version=2.0&details=true'
        api_key = 'REDACTED'

        headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}

        req = urllib.request.Request(url, body, headers) 

        response = urllib.request.urlopen(req)


        result = response.read()
        result = json.loads(result) 
        result = result["Results"]["output1"]["value"]["Values"][0][0] 

        #############
        # SAME AS ABOVE FOR NUMBER OF DONORS
        #############

        body = json.loads(request.body)
        data =  {
                    "Inputs": {
                        "input1":
                        {
                            "ColumnNames": ["auto_fb_post_mode", "currencycode", "goal", "media_type", "visible_in_search", "is_charity", "numdonors"],
                            "Values": [[ body['auto_fb_post_mode'], body['currencycode'], body['goal'], body['media_type'], body['visible_in_search'], body['is_charity'], "0" ],]
                        }, 
                    },
                    "GlobalParameters": {
                    }
                }

        # the API call
        body = str.encode(json.dumps(data))

        url = 'https://ussouthcentral.services.azureml.net/workspaces/8d7b88d4f64c47da88e35e4c3d3920aa/services/56a55012ca2b47bda8d890dc958593c6/execute?api-version=2.0&details=true'
        api_key = 'nzJyn3bW5CAAK54RH2VPDnD+M1fAkDe9smPIpA4dnxQANSu13nt5HxV0zW7yqiQnV42D6zATVKG2aOK8lxX5kg=='

        headers = {'Content-Type':'application/json', 'Authorization':('Bearer '+ api_key)}

        req = urllib.request.Request(url, body, headers) 

        response2 = urllib.request.urlopen(req)

        result2 = response2.read()
        result2 = json.loads(result2) 
        result2 = result2["Results"]["output1"]["value"]["Values"][0][0] 

        return Response({
            'avg_donation': result,
            'numdonors': result2,
            'rating': rating,
        })

