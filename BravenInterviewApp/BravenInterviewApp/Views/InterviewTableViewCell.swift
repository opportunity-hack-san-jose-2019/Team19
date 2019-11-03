//
//  InterviewTableViewCell.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/3/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import UIKit

class InterviewTableViewCell: UITableViewCell {
    
    var interview: MockInterview?
    @IBOutlet weak var interviewerLabel: UILabel!
    @IBOutlet weak var timeLabel: UILabel!
    @IBOutlet weak var locationLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
    func setInterview(interview: MockInterview) {
        self.interview = interview
        self.updateUI()
    }
    
    func updateUI() {
        if let interview = self.interview{
            interviewerLabel.text = "Interviewer: " + interview.interviewerName
            timeLabel.text = "Time: " + interview.time
            locationLabel.text = "Location: " + interview.location
        }
    }

}
