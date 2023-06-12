// 1.Our company has Interns, establish an interface to describe the Interns with the attributes: "name", "age", "skills". "skills" attribute can have multiple values, like: "React", "HTML", "JS", "TypeScript" etc.

interface Intern {
    name: string;
    age: number;
    skills: string[];
  }

//  Create objects based on Intern interface

// const intern1: Intern = {
//     name: "Alisa",
//     age: 20,
//     skills: ["React", "HTML", "JS", "TypeScript"],
//   };



// 2.Our company has Juniors, establish an interface to describe the Juniors with the attributes: "name", "age", "skills", "date_of_promotion", "domain" "domain" needs to be an enum type of values: "Web", "Connect", "Backend"


 enum Domain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
  }
  
  interface Junior {
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: Date;
    domain: Domain;
  }


//  Create objects based on Junior interface

//   const junior_1: Junior = {
//     name: "Alisa",
//     age: 24,
//     skills: ["React", "HTML", "JS", "TypeScript"],
//     date_of_promotion: new Date("2023-06-12"),
//     domain: Domain.Web,
//   };



//3.Now establish an interface to describe our Company, which has attributes: "Interns", "Juniors", "Country"
interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string;
  }


  
//  Create objects based on Company interface

//   const myCompany: Company = {
//     Interns: [
//       {
//         name: "Alisa",
//         age: 20,
//         skills: ["React", "HTML", "JS", "TypeScript"],
//       },
//       {
//         name: "Anik",
//         age: 21,
//         skills: ["HTML", "CSS", "JavaScript"],
//       },
//     ],
//     Juniors: [
//       {
//         name: "Rita",
//         age: 21,
//         skills: ["React", "HTML", "JS", "TypeScript"],
//         date_of_promotion: new Date("2022-05-15"),
//         domain: Domain.Web,
//       },
//       {
//         name: "Beni",
//         age: 23,
//         skills: ["Java", "Spring", "SQL"],
//         date_of_promotion: new Date("2022-07-10"),
//         domain: Domain.Backend,
//       },
//     ],
//     Country: "United States",
//   };
  

// 4. Finally, export the interface for Company.
export { Company };