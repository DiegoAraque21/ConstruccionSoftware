/*
Keep track of the points collected by the player and show them in the screen

Diego Araque
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PlayerPoints : MonoBehaviour
{
    public TextMeshProUGUI scoreUI;

    [SerializeField] int points;

    void Update() {
        scoreUI.text = points.ToString();
    }

    void OnCollisionEnter2D(Collision2D col)
    {
        if (col.gameObject.tag == "Joker"){
            points --;
        } else if(col.gameObject.tag == "Trophy"){
            points +=5;
        }
    }
    void OnTriggerEnter2D(Collider2D col) {
        if (col.gameObject.tag == "Joker"){
            points --;
        } else if(col.gameObject.tag == "Trophy"){
            Destroy(col.gameObject);
            points +=5;
        }
    }
}
