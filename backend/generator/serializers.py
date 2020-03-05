from rest_framework import serializers


class RequestSerializer(serializers.Serializer):
    inequality = serializers.BooleanField()
    autogen_terms = serializers.BooleanField()
    autoDegree = serializers.CharField(many=True)