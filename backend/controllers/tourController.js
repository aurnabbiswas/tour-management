
import Tour from '../models/Tour.js'

//create new tour
export const createTour =async (req,res) => {
    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save()

        res
          .status(200)
          .json({
            success: true, 
            messege: 'Successfully created', 
            data: savedTour
        });

    } catch (err){
        res.status(500).json({success: false, messege: 'Failed to create . Try again'})

    }

}

//update tour

export const updateTour = async(req, res) =>{
    const id = req.params.id

  try {
    const updatedTour = await Tour.findByIdAndUpdate(id,{
        $set: req.body
    }, {new:true})
    res
        .status(200)
        .json({
          success: true, 
          messege: 'Successfully updated', 
          data: updatedTour
    });
  } catch (err) {
    res.status(500).json({
      success: false, 
      messege: 'Failed to update', 
     
    });
        
  }
}

//delete tour

export const deleteTour = async() =>{

    try {
        
    } catch (err) {
        
    }
}

//getSingle tour

export const getSingleTour = async() =>{

    try {
        
    } catch (err) {
        
    }
}

//getAll tour

export const getAllTour = async() =>{

    try {
        
    } catch (err) {
        
    }
}