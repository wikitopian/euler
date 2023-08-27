/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */

/*
const reqSkills = ["java", "nodejs", "reactjs"];

const people = [
  ["java"],
  ["nodejs"],
  ["nodejs", "reactjs"],
];
*/

const reqSkills = ["algorithms", "math", "java", "reactjs", "csharp", "aws",];

const people = [
  ["algorithms", "math", "java", ],
  ["algorithms", "math", "reactjs", ],
  ["java", "csharp", "aws", ],
  ["reactjs", "csharp", ],
  ["csharp", "math", ],
  ["aws", "java", ],
];

const smallestSufficientTeam = (reqSkills, people) => {
  // bitmask to match
  const skillMask = (1 << reqSkills.length) - 1;
  console.log(`skillMask: ${skillMask}`);

  // bitmaskify skills
  people = people.map((p) => p.map((skill) => 2 ** reqSkills.indexOf(skill)));

  const teamAll = people.map((p) => p.reduce((prev, skill) => prev + skill))
    .map((skill, i) => [i, skill])
    .sort((a, b) => a[1] - b[1])
    .reverse();

  const team = [...teamAll];

  return team;
};

console.log(smallestSufficientTeam(reqSkills, people));
