//
//  CareerInterestPickerViewController.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/2/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import UIKit

class CareerInterestPickerViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    

    @IBOutlet weak var tableView: UITableView!
    let interestCellIdentifier = "interestCellIdentifier"
    
    // TODO: Get this from the database
    var interests = ["Business", "Public Relations", "Education", "Human Resources", "Behavioral", "Health", "Technology", "Marketing", "Finance", "Communications", "Accounting", "Writing", "Journalism", "Engineering", "Management", "Human Relations"]
    var recommendedInterests: [String] = ["Mechanical Engineering", "Physics"]
    
    var recommendedInterestsSection = 0
    var moreInterestsSection = 1
    
    var pickedInterests: [String] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Sort interests alphabetically
        interests = interests.sorted{ $0 < $1 }
        // TODO: Sort recommended interests by relevance?
        recommendedInterests = recommendedInterests.sorted{ $0 < $1 }
        
        // Set up table view
        self.tableView.delegate = self
        self.tableView.dataSource = self
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: interestCellIdentifier)
        tableView.tintColor = .black

        if recommendedInterests.count == 0 {
            recommendedInterestsSection = -1
            moreInterestsSection = 0
        }
        
        pickedInterests = MockData.shared.mockProfile.careerInterests
        
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return recommendedInterests.count > 0 ? 2 : 1
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        
        if recommendedInterests.count == 0 {
            return interests.count
        }
        
        if section == 0 {
            return recommendedInterests.count
        } else if section == 1 {
            return interests.count
        } else {
            return 0
        }
        
    }
    
    func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
        if recommendedInterests.count == 0 {
            return 0
        } else {
            return 40
        }
    }
    
    func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
        let view = UIView()
        
        if recommendedInterests.count == 0 {
            return view
        }
        
        view.backgroundColor = tableView.backgroundColor
        let label = UILabel(frame: CGRect(x: 15, y: 12, width: self.view.frame.width, height: 20))
        label.font = UIFont(name: "HoeflerText-Black", size: 22)
        view.addSubview(label)
        
        if section == 0 {
            label.text = "Recommended Interests"
        } else if section == 1 {
            label.text = "More Interests"
        }
        return view
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: interestCellIdentifier)!
        
        var cellText = ""
        if indexPath.section == recommendedInterestsSection {
            cellText = recommendedInterests[indexPath.row]
        } else if indexPath.section == moreInterestsSection {
            cellText = interests[indexPath.row]
        }
        cell.textLabel?.text = cellText
        if MockData.shared.mockProfile.careerInterests.contains(cellText) {
            cell.accessoryType = .checkmark
        }
        
        cell.textLabel?.font = UIFont(name: "Hoefler Text", size: 20)
        cell.selectionStyle = .none
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let cell = tableView.cellForRow(at: indexPath)!
        
        if cell.accessoryType == .checkmark {
            cell.accessoryType = .none
            if indexPath.section == recommendedInterestsSection {
                for i in 0..<pickedInterests.count where pickedInterests[i] == recommendedInterests[indexPath.row] {
                    pickedInterests.remove(at: i)
                }
            } else if indexPath.section == moreInterestsSection {
                for i in 0..<pickedInterests.count where pickedInterests[i] == interests[indexPath.row] {
                    pickedInterests.remove(at: i)
                }
            }
            
        } else {
            cell.accessoryType = .checkmark
            var interest = ""
            if indexPath.section == recommendedInterestsSection {
                interest = recommendedInterests[indexPath.row]
            } else if indexPath.section == moreInterestsSection {
                interest = interests[indexPath.row]
            }
            
            self.pickedInterests.append(interest)
        }
    }
    
    
    @IBAction func donePressed(_ sender: Any) {
        
        if pickedInterests.count == 0 {
            // Ensure that the user has at least one interest picked
            let alert = UIAlertController(title: "Select your Interests",
                                          message: "You must have at least one interest selected",
                                          preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "OK",
                                          style: .default,
                                          handler: nil))
            self.present(alert,
                         animated: true,
                         completion: nil)
        } else {
            MockData.shared.mockProfile.careerInterests = pickedInterests
            self.navigationController?.popViewController(animated: true)
        }
        
    }
    
}
