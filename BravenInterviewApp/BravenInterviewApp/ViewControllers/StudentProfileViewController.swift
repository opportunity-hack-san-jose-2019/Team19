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

    @IBOutlet weak var upcomingEventsTableView: UITableView!
    @IBOutlet weak var careerInterestLabel: UILabel!
    
    // TODO: Use database
    let upcomingEvents: [CareerEvent] = [CareerEvent(id: 12345, name: "Mock Interviews", location: "San Jose", date: "January 1, 2020")]
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Set up table view
        upcomingEventsTableView.delegate = self
        upcomingEventsTableView.dataSource = self
        upcomingEventsTableView.layer.borderWidth = 0.5
        upcomingEventsTableView.layer.borderColor = upcomingEventsTableView.separatorColor?.cgColor
        
        // TODO: Set career interests label to have the user's interests
        
    }
    
    // MARK: Actions
    
    @IBAction func editCareerInterestsPressed(_ sender: Any) {
        let storyBoard : UIStoryboard = UIStoryboard(name: "Main", bundle:nil)
        let nextViewController = storyBoard.instantiateViewController(withIdentifier: "careerInterestsVC") as! CareerInterestPickerViewController
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
    
    func registerPressed() {
        // TODO: Present any sign up information
        // TODO: Just update one cell
        upcomingEventsTableView.reloadData()
    }
    
}
