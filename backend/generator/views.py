from rest_framework import status, views
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

from .invariant_generator import QING_GENERATOR

#
#
# class QINGView(views.APIView):
#
#     def post(self, request, pk=None):
#         data = request.data
#         invariants = GetInvariants(data)
#
#         return Response(invariants, status = status.HTTP_200_OK)



class QINGView(views.APIView):

    def post(self, request, pk=None):
        data = request.data
        q = QING_GENERATOR(data)
        invariants = q.get_response()
        # print(invariants['initial_assignments']['constraints'])
        invariants['initial_assignments']['constraints'] = []
        return Response( invariants, status = status.HTTP_200_OK)