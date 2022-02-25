/*
Toggle the color of the sprite between two presets

Diego Araque
2022-02-23
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SwapColors : MonoBehaviour
{
    [SerializeField] Color[] colors;

    int colorIndex = 0;
    SpriteRenderer renderer2D;
    // Start is called before the first frame update
    void Start()
    {
        //get a reference to another component on this object
        renderer2D = GetComponent<SpriteRenderer>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButtonDown("Fire1"))
        {
            colorIndex++;
            // Select one of the colors using the index
            renderer2D.color = colors[colorIndex % colors.Length];
        }
    }
  
}

