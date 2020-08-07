    const breeding = (type, ngMl, res) => {
        if(type === 'Artificial Insemination' || type === 'AI') {
            if(ngMl < 2) {
                return res.status(200).send('Re-test in 3 days')
            }
            else if(ngMl >= 2 && ngMl < 3) {
                return res.status(200).send('Re-test in 2 days')
            }
            else if(ngMl >= 3 && ngMl < 3.6) {
                res.status(200).send('Inseminate in 48 hours') 
            }
            else if(ngMl >= 3.6 && ngMl < 4) {
                res.status(200).send('Inseminate in 40 hours')
            } 
            else if(ngMl >= 4 && ngMl < 4.7) {
                res.status(200).send('Inseminate in 32 hours')
            }
            else if(ngMl >= 4.7 && ngMl < 6.1) {
                res.status(200).send('Inseminate in 24 hours') 
            }
            else if(ngMl >= 6.1 && ngMl < 7) {
                res.status(200).send('Inseminate in 12 hours') 
            }
            else if(ngMl >= 7 && ngMl < 8.1) {
                res.status(200).send('Inseminate in 3 hours')
            }
            else if(ngMl >= 8.1 && ngMl < 13.1) {
                res.status(200).send('Inseminate NOW!')
            }
            else if(ngMl >= 13.1 && ngMl < 22) {
                res.status(200).send('This method will no longer be effective. Consider trans-cervical or surgical insemination methods.') 
            }

        }
        else if(type === 'Trans-cervical Insemination' || type === 'TCI') {
            if(ngMl < 2.7) {
                res.status(200).send('Re-test in 4 days')
            }
            else if(ngMl >= 2.7 && ngMl < 3.9) {
                res.status(200).send('Re-test in 3 days') 
            }
            else if(ngMl >= 3.9 && ngMl < 6.1) {
                res.status(200).send('Re-test in 2 days')
            }
            else if(ngMl >= 6.1 && ngMl < 7) {
                res.status(200).send('Inseminate in 36 hours')
            }
            else if(ngMl >= 7 && ngMl < 9.1) {
                res.status(200).send('Inseminate in 24 hours') 
            } else if(ngMl >= 9.1 && ngMl < 10.4) {
                res.status(200).send('Inseminate in 12 hours')
            }
            else if(ngMl >= 10.4 && ngMl < 11.1) {
                res.status(200).send('Inseminate in 3 hours')
            }
            else if(ngMl >= 11.1 && ngMl < 17) {
                res.status(200).send('Inseminate NOW!') 
            }
            else if(ngMl >= 17 && ngMl < 22) {
                res.status(200).send('This method will no longer be effective. Consider Surgical Insemination.')
            }
        }
        else if (type === 'Surgical Insemination' || type === 'SI') {
            if(ngMl < 3) {
                res.status(200).send('Re-test in 4 days')
            }
            else if(ngMl >= 3 && ngMl < 4.1) {
                res.status(200).send('Re-test in 3 days')
            }
            else if(ngMl >= 4.1 && ngMl < 6.1) {
                res.status(200).send('Re-test in 2 days') 
            }
            else if(ngMl >= 6.1 && ngMl < 9) {
                res.status(200).send('Re-test in 1 day')
            }
            else if(ngMl >= 9 && ngMl < 10.1) {
                res.status(200).send('Re-test in 18 hours') 
            } else if(ngMl >= 10.1 && ngMl < 13.1) {
                res.status(200).send('Re-test in 12 hours') 
            }
            else if(ngMl >= 13.1 && ngMl < 15.1) {
                res.status(200).send('Inseminate within 3 hours')
            }
            else if(ngMl >= 15.1 && ngMl < 20) {
                res.status(200).send('Inseminate NOW!')
            }
            else if(ngMl >= 20 && ngMl < 21) {
                res.status(200).send('This method will no longer be effective. Try again during the next heat cycle.')
            }
        }
    }

    module.exports = {
        getResults: async (req, res) => {
            const {dog_name, dog_age, breed, heat_number, insemination_type, ng_ml, date_taken, time_taken} = req.body
            const db = req.app.get('db')
            const dog_id = await db.dog_profile({dog_name, dog_age, breed, heat_number})
        db.breeding_info({dog_id: dog_id[0].dog_id, insemination_type, ng_ml, date_taken, time_taken})

        breeding(insemination_type, ng_ml, res)
        }
    }