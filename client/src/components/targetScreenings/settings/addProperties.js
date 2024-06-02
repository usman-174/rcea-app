function addPropertiesToPupils(pupilsArray, ScreenData,fields) {
    const res  =pupilsArray.map((pupil) => {
      const matchingObject = ScreenData.find(
        (object) => object?.pupil_id?._id === pupil._id
      );
      // pupil["selected"] = false;
     
      if (matchingObject) {
        fields.forEach((field) => {
        

            pupil[field] = matchingObject[field] || "";
          // }
        });
      }
    
      return pupil;
    });
 
    return  res
  }
export {addPropertiesToPupils}