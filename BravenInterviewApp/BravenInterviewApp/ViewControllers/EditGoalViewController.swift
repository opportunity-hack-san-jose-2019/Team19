//
//  EditGoalViewController.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/3/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import UIKit

class EditGoalViewController: UIViewController, UITextViewDelegate {
    
    var goal: String = ""

    @IBOutlet weak var goalTextView: UITextView!
    override func viewDidLoad() {
        super.viewDidLoad()

        // Set up view
        goalTextView.contentInset = UIEdgeInsets(top: 10, left: 20, bottom: 10, right: 20)
        goalTextView.delegate = self
        goalTextView.returnKeyType = .done
        goalTextView.text = MockData.shared.mockProfile.eventGoal
    }
    

    func setGoal(goal: String) {
        self.goal = goal
    }
    
    // MARK: Action Methods
    
    @IBAction func donePressed(_ sender: Any) {
        // TODO: Connect with backend
        MockData.shared.mockProfile.eventGoal = goalTextView.text
        self.navigationController?.popViewController(animated: true)
    }
    
    // MARK: UITextField methods
    func textViewShouldEndEditing(_ textView: UITextView) -> Bool {
        if goalTextView.text.count > 0 {
            goal = goalTextView.text
        } else {
            // Ensure that the user has a goal
            let alert = UIAlertController(title: "Describe your Goals",
                                          message: "You must write a goal for your interview experience.",
                                          preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "OK",
                                          style: .default,
                                          handler: nil))
            self.present(alert,
                         animated: true,
                         completion: nil)
            
        }
        
        return true
    }
    
    func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
        if text == "\n" {
            textView.resignFirstResponder()
            return false
        }
        
        return true
    }
    
}
