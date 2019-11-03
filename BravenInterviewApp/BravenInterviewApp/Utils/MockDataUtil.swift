//
//  MockDataUtil.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/3/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import Foundation

public class MockData: NSObject {
    static var shared: MockData = MockData()
    let studentProfilesKey = "studentProfilesKey"
    let interviewKey = "interviewKey"
    let eventKey = "eventKey"
    
    public var mockProfile: StudentProfile = StudentProfile(first: "Jane", last: "Doe", interests: ["Technology"], goal: "To brush up on my interview skills")
    public var mockInterviews: [MockInterview] = [MockInterview(interviewer: "John Smith", time: "6:30pm-7:30pm", location: "Table A"), MockInterview(interviewer: "Alison Sun", time: "5:00pm-5:30pm", location: "Table C")]
    public var mockEvent: CareerEvent = CareerEvent(id: "1234", name: "Mock Interviews", location: "San Jose", date: "March 10, 2020")
    
    private override init() {
        super.init()
    }
    
//    private func createDictFromStudentProfile(student: StudentProfile) -> [String:String] {
//        var dict = [String : String]()
//        dict["First"] = student.firstName
//        dict["Last"] = student.lastName
//        dict["Goal"] = student.eventGoal
//
//        return dict
//    }
//
//    private func createDictFromInterviewModel(interview: MockInterview) -> [String:String] {
//        var dict = [String : String]()
//        dict["Interviewer"] = interview.interviewerName
//        dict["Location"] = interview.location
//        dict["Time"] = interview.time
//        return dict
//    }
//
//    private func createDictFromCareerEventModel(event: CareerEvent) -> [String:String] {
//        var dict = [String : String]()
//        dict["id"] = event.eventID
//        dict["Name"] = event.name
//        dict["Date"] = event.date
//        dict["Location"] = event.location
//        return dict
//    }
//
//    private func createStudentModelFromDict(dict: [String : String]) -> StudentProfile? {
//        guard let first = dict["First"] else { return nil }
//        guard let last = dict["Last"] else { return nil }
//        guard let goal = dict["Goal"] else { return nil }
//
//        return StudentProfile(first: first, last: last, interests: [], goal: goal)
//    }
//
//    private func createMockInterviewFromDict(dict: [String:String]) -> MockInterview? {
//        guard let interviewer = dict["Interviewer"] else { return nil }
//        guard let location = dict["Location"] else { return nil }
//        guard let time = dict["Time"] else { return nil }
//
//        return MockInterview(interviewer: interviewer, time: time, location: location)
//
//    }
//
//    private func createCareerEventFromDict(dict: [String:String]) ->CareerEvent? {
//        guard let id = dict["id"] else { return nil }
//        guard let name = dict["Name"] else { return nil }
//        guard let date = dict["Date"] else {return nil}
//        guard let location = dict["Location"] else {return nil}
//
//        return CareerEvent(id: id, name: name, location: location, date: date)
//    }

    
    
}
