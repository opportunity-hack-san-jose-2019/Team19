//
//  EventModel.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/2/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import Foundation

public class CareerEvent: NSObject {
    var eventID: String
    var name: String
    var location: String
    var date: String
    var isRegistered: Bool
    var scheduledInterviews: [MockInterview] = []
    
    init(id: String, name: String, location: String, date: String) {
        // TODO: Get this information from the server
        self.eventID = id
        self.name = name
        self.location = location
        self.date = date
        self.isRegistered = false
        
        let interviews: [MockInterview] = [MockInterview(interviewer: "Greg Nelson", time: "5:30pm - 6:00pm", location: "Table A"),
        MockInterview(interviewer: "Bill Nye", time: "6:30pm - 7:00pm", location: "Table G")]
        
        self.scheduledInterviews = interviews
        super.init()
    }
    
    func registerForEvent() {
        // TODO: Inform the backend that we registered for an event
        self.isRegistered = true
    }
}
