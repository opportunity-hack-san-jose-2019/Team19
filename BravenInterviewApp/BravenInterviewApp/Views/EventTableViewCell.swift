//
//  EventTableViewCell.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/2/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import UIKit

protocol EventTableViewCellDelegate: class {
    func moreDetailsPressed(event: CareerEvent)
    func registerPressed()
}

class EventTableViewCell: UITableViewCell {
    
    // MARK: Model
    
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var locationLabel: UILabel!
    @IBOutlet weak var dateLabel: UILabel!
    @IBOutlet weak var actionButton: UIButton!
    
    var event: CareerEvent?
    weak var delegate: EventTableViewCellDelegate?
    
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

    func setEvent(event: CareerEvent) {
        self.event = event
        updateUI()
    }
    
    func updateUI() {
        if let event = self.event {
            titleLabel.text = event.name
            locationLabel.text = event.location
            dateLabel.text = event.date
            let actionButtonTitle = event.isRegistered ? "More Details" : "Register"
            actionButton.setTitle(actionButtonTitle, for: .normal)
        }

    }

    @IBAction func registerButtonPressed(_ sender: Any) {
        if let event = self.event {
            // TODO: Connect with backend
            if event.isRegistered {
                delegate?.moreDetailsPressed(event: event)
            } else {
                event.registerForEvent()
                delegate?.registerPressed()
            }
            
        }
        
    }
}
