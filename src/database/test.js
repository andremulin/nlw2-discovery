const Database = require ('./db')
const createProffy = require ('./createProffy')

Database.then(async (db) => {

    proffyValue = {
        name: "Andre Mulin",
        avatar: "https://avatars2.githubusercontent.com/u/33038454?s=460&u=41a7a389363a436f6804b518fb7ff51fcc24e8d7&v=4",
        whatsapp: "212121212",
        bio: "Instrutor de Mindfullness"
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 2,
            time_from: 520,
            time_to: 1320
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (proffys.id = classes.proffy_id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    const selectedClassesSchedules = await db.all(`
        SELECT classes_schedule.*
        FROM classes_schedule
        WHERE classes_schedule.class_id = 1
        AND classes_schedule.weekday = "2"
        AND classes_schedule.time_from <= "1400"
        AND classes_schedule.time_to > "1400"
    `)

    console.log(selectedClassesSchedules)

})