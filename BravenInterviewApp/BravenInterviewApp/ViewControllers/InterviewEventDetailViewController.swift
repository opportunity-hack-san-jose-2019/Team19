//
//  EventDetailViewController.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/2/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import UIKit

class InterviewEventDetailViewController: UIViewController {
    
    @IBOutlet weak var eventNameLabel: UILabel!
    @IBOutlet weak var interviewScheduleTableView: UITableView!
    var event: CareerEvent?

    override func viewDidLoad() {
        super.viewDidLoad()

        guard let event = self.event else { return }
        
        eventNameLabel.text = event.name
    }
    

    // MARK: Action Buttons
    
    @IBAction func backPressed(_ sender: Any) {
        self.navigationController?.popViewController(animated: true)
    }
    
}
