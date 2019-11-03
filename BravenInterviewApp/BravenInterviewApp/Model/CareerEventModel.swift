//
//  EventModel.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/2/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import Foundation

public class CareerEvent: NSObject {
    var eventID: Int
    var name: String
    var location: String
    var date: String
    var isRegistered: Bool
    
    init(id: Int, name: String, location: String, date: String) {
        self.eventID = id
        self.name = name
        self.location = location
        self.date = date
        self.isRegistered = false
        
        super.init()
    }
    
    func registerForEvent() {
        // TODO: Inform the backend that we registered for an event
        self.isRegistered = true
    }
}
