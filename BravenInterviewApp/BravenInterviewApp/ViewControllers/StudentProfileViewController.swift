//
//  StudentProfileViewController.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/2/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import UIKit

class StudentProfileViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, EventTableViewCellDelegate {

    // MARK: Model
    var profile: StudentProfile?
    var upcomingEvents: [CareerEvent] = []

    @IBOutlet weak var upcomingEventsTableView: UITableView!
    @IBOutlet weak var careerInterestLabel: UILabel!
    @IBOutlet weak var goalTextView: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Set up table view
        upcomingEventsTableView.delegate = self
        upcomingEventsTableView.dataSource = self
        
        profile = MockData.shared.mockProfile
        

    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(true)
        // TODO: Remove mock data
                upcomingEvents = [MockData.shared.mockEvent]
        profile = MockData.shared.mockProfile
        var interestsText = ""
        let interests = profile!.careerInterests.sorted{ $0<$1}
        for i in 0..<interests.count {
            var newText = interests[i]
                
            if i < interests.count - 1 {
                newText = newText + ", "
            }
            interestsText = interestsText + newText
        }
        careerInterestLabel.text = interestsText
        goalTextView.text = profile!.eventGoal
    }
    
    // MARK: Actions
    
    @IBAction func editCareerInterestsPressed(_ sender: Any) {
        let storyBoard : UIStoryboard = UIStoryboard(name: "Main", bundle:nil)
        let nextViewController = storyBoard.instantiateViewController(withIdentifier: "careerInterestsVC") as! CareerInterestPickerViewController
        self.navigationController?.pushViewController(nextViewController, animated: true)
    }

    @IBAction func editPersonalGoalPressed(_ sender: Any) {
        
        let storyBoard : UIStoryboard = UIStoryboard(name: "Main", bundle:nil)
        let nextViewController = storyBoard.instantiateViewController(withIdentifier: "editGoalVC") as! EditGoalViewController
        // TODO: Connect to backend
        nextViewController.setGoal(goal: profile!.eventGoal)
        self.navigationController?.pushViewController(nextViewController, animated: true)
        
        
    }
    
    @IBAction func logoutPressed(_ sender: Any) {
        
        self.navigationController?.popViewController(animated: true)
    }
    
    // MARK: Table View Methods
    // TODO: Add Past Events

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return upcomingEvents.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = upcomingEventsTableView.dequeueReusableCell(withIdentifier: "upcomingEventsTableViewCellIdentifier") as! EventTableViewCell
        cell.delegate = self
        cell.selectionStyle = .none
        
        cell.setEvent(event: upcomingEvents[indexPath.row])
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 150
    }

    // MARK: EventTableViewCell methods
    
    func moreDetailsPressed(event: CareerEvent) {
        let storyBoard : UIStoryboard = UIStoryboard(name: "Main", bundle:nil)
        let nextViewController = storyBoard.instantiateViewController(withIdentifier: "interviewDetailVC") as! InterviewEventDetailViewController
        nextViewController.event = event
        self.navigationController?.pushViewController(nextViewController, animated: true)
    }
    
    func registerPressed(event: CareerEvent) {
        // TODO: Present any sign up information
        // TODO: Just update one cell
        upcomingEventsTableView.reloadData()
        profile?.registeredEvents.append(event.eventID)
    }
    
}
