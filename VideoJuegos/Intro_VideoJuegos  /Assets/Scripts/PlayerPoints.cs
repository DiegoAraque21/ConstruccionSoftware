using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerPoints : MonoBehaviour
{   

    [SerializeField] int points;
    void OnCollisionEnter2D(Collision2D col)
    {
        if(col.gameObject.tag == "ball"){
            points ++;
        }
    }
    void OnTriggerEnter2D(Collider2D col) {
       Destroy(col.gameObject);
       points +=5;
    }
}
