const Catalogue = [
    {
        instructor: { name: "John" },
        course: {CourseName: "Class 1" },
        office: {},
        schedule: { time: "9:00am - 3:00pm" },
        prerequisites: [],
    },
        {
        instructor: { name: "John" }, //duplicate
        course: {CourseName: "Class 2" },
        office: { room: "111"},
        schedule: { time: "9:00am - 3:00pm" },
        prerequisites: ["John prerequisite"],
    },
        {
        instructor: { name: "Joe", },
        course: {CourseName: "Class 3" },
        office: { room: "112"},
        schedule: { time: "11:00am - 1:00pm" },
        prerequisites: ["Algebra"],
    },
        {
        instructor: { name: "Johnson" },
        course: {CourseName: "Class 4" },
        office: { room: "113"},
        schedule: { time: "7:00am - 2:00pm" },
        prerequisites: ["PreChem"],
    },
        {
        instructor: { name: "Johnny" },
        course: {CourseName: "Class 5" },
        office: { room: "114"},
        schedule: { time: "12:00pm - 5:00pm" },
        prerequisites: ["Trig"],
    },
        {
        instructor: { name: "James" },
        course: {CourseName: "Class 6" },
        office: { room: "115"},
        schedule: { time: "10:00am - 3:00pm" },
        prerequisites: ["idk I'm running out of other examples"],
    },
        {
        instructor: { name: "Jim" },
        course: {CourseName: "Class 7" },
       office: { room: "116"},
        schedule: { time: "8:00am - 2:00pm" },
        prerequisites: ["AnotherExample1"],
    },
        {
        instructor: { name: "Jimmy" },
        course: {CourseName: "Class 8" },
        office: { room: "117"},
        schedule: { time: "8:00am - 12:00pm" },
        prerequisites: ["AnotherExample2"],
    },
]

function SearchInstructor(Catalogue, TargetName) {
    return Catalogue.filter(Course => {
        return Course.instructor.name === TargetName;
    });
}

function GetOffice(Course) {
    return Course.office?.room ?? "No Office Found";
}

function UpdateTime(Catalog, Instructor, UpdatedTime) {
    return Catalog.map(Course => {
        if (Course.instructor.name !== Instructor) {
            return Course;
        }
        return {
            ...Course,
            schedule: {
                ...Course.schedule,
                time: UpdatedTime
            }
        };
    });
}

function FilterProperty(Catalog, Key, Value) {
    return Catalog.filter(Course => {
        return Course[Key] === Value;
    });
}

function SummarizeInstructor(Catalog, InstructorName) {
    return SearchInstructor(Catalog, InstructorName);
}

function FilterProperty(Catalog, Key, Value) {
    return Catalog.filter(Course => {
        return Course[Key] === Value;
    });
}

function Search(Catalog, Name) {
    const SearchResult = SearchInstructor(Catalog, Name);
    SearchResult.forEach(Course => {
        const prerequisites = Course.prerequisites.length > 0 ? Course.prerequisites : "No Prerequisite Found";
        console.log("Instructor: " + Course.instructor.name + " | Course: " + Course.course.CourseName + " | Time: " + Course.schedule.time + " | Room: " + (Course.office?.room ?? "No Office Found") + " | Prerequisites: " + prerequisites);
    });
}

function SearchOffice(Catalog) {
    const targetCourse = Catalog[0];
    const OfficeRoom = GetOffice(targetCourse);
    const prerequisites = targetCourse.prerequisites.length > 0 ? targetCourse.prerequisites : "No Prerequisite Found";
    console.log("Office Number: " + OfficeRoom + " | Prerequisites: " + prerequisites);
}

function UpdateTimeImmutable(Catalog, Name, Time) {
    const UpdateCatalogue = UpdateTime(Catalog, Name, Time);
    console.log("Original time: " + Catalog[0].schedule.time);
    console.log("Updated time: " + UpdateCatalogue[0].schedule.time);
}

function Filter(Catalog, Key, Value) {
    const FilterResult = FilterProperty(Catalog, Key, Value);
    FilterResult.forEach(Course => {
        const prerequisites = Course.prerequisites.length > 0 ? Course.prerequisites : "No Prerequisite Found";
        console.log("Filter Test - " + Course.instructor.name + ", " + Course.course.CourseName + ", " + Course.schedule.time + ", " + (Course.office?.room ?? "No Office Found") + ", " + prerequisites);
    });
}

function SummaryReport(Catalog, Name) {
    Search(Catalog, Name);
}

const ExportedJSON = JSON.stringify(Catalogue);
const ParsedCatalogue = JSON.parse(ExportedJSON);

SummaryReport(Catalogue, "John");
UpdateTimeImmutable(Catalogue, "John", "10:00am - 4:00pm");