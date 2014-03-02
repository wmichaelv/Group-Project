using UnityEngine;
using System.Collections;

public class AliceStand : MonoBehaviour {

	private Animator animator;
	
	// Use this for initialization
	void Start() { animator = this.GetComponent<Animator>(); }
	
	// Update is called once per frame
	void Update() {

		/*
		 *  Basic Movement Keys:
		 *  
		 *  direction 0 = idle, no need to has 5
		 *  shift for dashing
		 *  mouse for reverse movement
		 *  action for negate movement
		 *  animator.SetInteger("direction", 0 - 9)
		 *  animator.SetBool("shift", true - false)
		 *  animator.SetBool("mouse", true - false)
		 *  animator.SetBool("action", true - false)
		 * 
		 */

		var horizontal = Input.GetAxis("Horizontal");
		var vertical = Input.GetAxis("Vertical");

	 	Vector2 v2Pos = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
		Vector2 objectPos = animator.transform.position;
  
    v2Pos = v2Pos - objectPos;

		int direction = getDirection(horizontal, vertical);
		bool mouse = getMouse(v2Pos.x, v2Pos.y, direction);

		animator.SetInteger("direction", direction);
		animator.SetBool("shift",(Input.GetKeyDown(KeyCode.RightShift) || 
			Input.GetKeyDown(KeyCode.LeftShift)));
		animator.SetBool("mouse", mouse);
		animator.SetBool("action", false);
	}

	int getDirection(float h, float v) {
		return (h != 0 || v != 0) ? ((h != 0) ? ((v != 0) ? 
			  ((h < 0) ? ((v < 0) ? 1 : 7) : ((v < 0) ? 3 : 9)) : 
			  ((h < 0) ? 4 : 6)) : ((v < 0) ? 2 : 8)) : 0;
	}

	bool getMouse(float x, float y, int d) {
		switch (d) {
		  case 0:
		    return true;
		  case 1: //Down-Left
		    return (x < 0 && y < 0) ? true : ((x > 0) ? 
		    	(y / x < -1) : (x / y < -1));
	      case 2: //Down
		    return y < 0;
		  case 3: //Down-Right
		    return (x > 0 && y < 0) ? true : ((x > 0) ?
		      (x / y > 1) : (y / x > 1));
		  case 4: //Left
		    return x < 0;
		  case 6: //Right
  		    return x > 0;
  		  case 7: //Top-Left
		    return (x < 0 && y > 0) ? true : ((x > 0) ?
		      (y / x > 1) : (x / y > 1));
          case 8: //Up
		    return y > 0;
		  case 9: //Top-Right
  		    return (x > 0 && y > 0) ? true : ((x > 0) ?
		      (x / y > -1) : (y / x > -1));
		  default:
			return true;
		}
	}
}
