//
//  StudentProfileModel.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/3/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import Foundation

public class StudentProfile: NSObject {
    var firstName: String = ""
    var lastName: String = ""
    var careerInterests: [String] = []
    var eventGoal: String = ""
    var registeredEvents: [String] = []
    
    init(first: String, last: String, interests: [String], goal: String) {
        self.careerInterests = interests
        self.eventGoal = goal
    }
    
    
}
