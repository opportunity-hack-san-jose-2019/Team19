//
//  InterviewModel.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/3/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import Foundation

public class MockInterview: NSObject {
    var interviewerName: String
    var time: String
    var location: String
    
    init(interviewer: String, time: String, location: String) {
        self.interviewerName = interviewer
        self.time = time
        self.location = location
    }
}
