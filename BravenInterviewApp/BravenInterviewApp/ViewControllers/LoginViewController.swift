//
//  ViewController.swift
//  BravenInterviewApp
//
//  Created by Claire Illich on 11/2/19.
//  Copyright © 2019 Team 19. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {

    @IBOutlet weak var userEmailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    @IBOutlet weak var loginButton: UIButton!
    @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        loginButton.setTitle("Sign In", for: .normal)
        activityIndicator.isHidden = true
        
    }

    @IBAction func loginButtonPressed(_ sender: Any) {
        // TODO: Check that the user email and password are correct
        
        // Remove login button text
        loginButton.setTitle("", for: .normal)
        // Show loading indicator
        activityIndicator.isHidden = false
        activityIndicator.startAnimating()
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            self.activityIndicator.stopAnimating()
            self.activityIndicator.isHidden = true
            self.login()
        }
        

    }
    
    func login() {
        let storyBoard : UIStoryboard = UIStoryboard(name: "Main", bundle:nil)
        let nextViewController = storyBoard.instantiateViewController(withIdentifier: "studentProfileVC") as! StudentProfileViewController
        self.navigationController?.pushViewController(nextViewController, animated: true)
    }
    
}

