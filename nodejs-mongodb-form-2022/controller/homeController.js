import studentModel from "../models/student.js"

class homeController {

        // cteating Document 
        static createDoc = async(req,res)=>{
                try {
                const {name ,age, fees} =req.body
                 const doc = new studentModel({
                        name:name,
                        age:age,
                        fees:fees
                 })
                 const result = await doc.save()
                 res.redirect('/student')
                } catch (error) {
                       console.log(error) ;
                }
               
                res.redirect('/student')
        }

        // getting document 
      static getAllDoc =async (req,res)=>{
        try {
              const result = await studentModel.find(); 
              res.render('home.ejs',{data:result})
        } catch (error) {
               console.log(error) 
        }
      }

      // edititng Document here

        static editDoc =async (req,res)=>{
                console.log(req.params.id)
                try {
                const result = await studentModel.findById(req.params.id)      
                console.log(result);
                res.render('edit.ejs',{data:result})
                } catch (error) {
                   console.log(error)     
                }
        }

        // update document here

        static updateDocById =async (req,res)=>{
              // console.log(req.params.id)
              // console.log(req.body);
              try {
                  const result = await studentModel.findByIdAndUpdate(req.params.id,req.body);
                  console.log(result);
              } catch (error) {
                    console.log(error) 
              }
              res.redirect('/student')
        }

       // delete document here

        static deleteDocById = async(req,res)=>{
            //   console.log(req.params.id);
        try {
              const result = await studentModel.findByIdAndDelete(req.params.id)
              res.redirect("/student");
        } catch (error) {
              console.log(error)
        }        
         }
}

export default homeController;