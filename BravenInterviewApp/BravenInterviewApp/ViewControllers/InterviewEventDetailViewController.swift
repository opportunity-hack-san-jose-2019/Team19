//
//  EventDetailViewController.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/2/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import UIKit

class InterviewEventDetailViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    
    @IBOutlet weak var eventNameLabel: UILabel!
    @IBOutlet weak var interviewScheduleTableView: UITableView!
    var event: CareerEvent?

    override func viewDidLoad() {
        super.viewDidLoad()

        guard let event = self.event else { return }
        
        // Set up table view
        interviewScheduleTableView.delegate = self
        interviewScheduleTableView.dataSource = self
        interviewScheduleTableView.layer.borderWidth = 0.5
        interviewScheduleTableView.layer.borderColor = interviewScheduleTableView.separatorColor?.cgColor
        
        // Set up view
        eventNameLabel.text = event.name
    }
    
    // MARK: UITableView methods
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if let event = self.event {
            return event.scheduledInterviews.count
        } else {
            return 0
        }
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = interviewScheduleTableView.dequeueReusableCell(withIdentifier: "interviewCell") as! InterviewTableViewCell
        cell.selectionStyle = .none
        
        if let event = self.event {
            let interview = event.scheduledInterviews[indexPath.row]
            cell.setInterview(interview: interview)
        }
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 114
    }
    
    
    // MARK: Action Buttons
    
    @IBAction func backPressed(_ sender: Any) {
        self.navigationController?.popViewController(animated: true)
    }
    
}
