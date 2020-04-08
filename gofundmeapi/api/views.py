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
