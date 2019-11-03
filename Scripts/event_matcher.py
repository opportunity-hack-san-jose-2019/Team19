import logging
import logging.handlers
import argparse
import sys
import time
import sched
import datetime
import json
import requests

MATCH_DATA_POST_URL = "http://18.219.240.122:3000/event_booking"
STUDENT_EVENT_URL = "http://18.219.240.122:3000/students_for_events?event_id=1"
RECOMMENDER_POST_URL = "http://18.219.240.122:3000/api/v1/recommender"
RECOMMENDER_GET_URL = "http://18.219.240.122:3000/api/v1/getter"

student_event_info = requests.get(STUDENT_EVENT_URL)
student_event_info = student_event_info.json()

for event in student_event_info:
    
    payload = {'name': event['name'],
                              'career_interest' : event['career_interest']}
    Payload=json.dumps(payload)
    resp = requests.post(RECOMMENDER_POST_URL, json=payload, verify=False)
    print(resp.status_code)
    print(resp.json())
    
    
    MATCH_DATA_GET_URL = "http://18.219.240.122:3000/booked_event?eventid=1"
    match_data_info = requests.get(MATCH_DATA_GET_URL)
    match_data_info = match_data_info.json()
    
    volunteer_mapping_info = requests.get(VOLUNTEER_MAPPING_INFO)
    j = 0
    if volunteer_mapping_info[j] in match_data_info['Volunteer_Id']:
        j += 1;
    else :
        payload = payload.update({'EventId': event['eventId'],
                                'Student_Id': event['Student_Id'],
                                'Volunteer_Id' : volunteer_mapping_info[j]})
        Payload=json.dumps(payload)
        confirm_mapping = requests.post(MATCH_DATA_POST_URL, json=payload, verify=False)
        
    
    
    
    
    
    

