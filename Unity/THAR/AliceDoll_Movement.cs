using UnityEngine;
using System.Collections;

public class AliceDoll_Movement : MonoBehaviour {

	private Animator animator;    // Store Animator
	//private bool dollAction; // Store dollAction

	// Use this for initialization
	void Start () {

		animator = this.GetComponent<Animator>();
	
	}
	
	// Update is call once per turn
	void Update() {

		//dollAction = getDollAction();

		setDollMovState();
		// setMovementAnimationState

	}

	bool getDollAction() {
		return false;
	}

	void setDollMovState() {
		// Check if Character is Processing Action
		//if (dollAction) setDollActionMovState();
		//else 
		setDollNonActionMovState();
	}

	void setDollActionMovState() {
		// Pending for Action States
	}

	void setDollNonActionMovState() {
		// Check if Character is idle
		//if (DollDirection == 0) setIdleMovState();
		//else 
		setDollMovingMovState();
	}

	void setDollMovingMovState() {
		// Set if Sprite needs to be reversed
		//animator.transform.Rotate(0, getRotation(DollReverse), 0);
		// Check if Character is moving to position of mouse
		setIdleMovState();
		//if (DollMouse) setDollForwardMovState();
		//else setDollBackwardMovState();
	}

	void setIdleMovState() {
		// isDashing() is to finish pre#, post# dashing animation
		//if (!isDashing()) 
		animator.Play("AliceDollStand");
	}

}
