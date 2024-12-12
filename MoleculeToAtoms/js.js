/* For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object
(associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index.
For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional. */

function parseMolecule(formula) {
    const stack = [{}];
    const regex = /([A-Z][a-z]?)(\d*)|([\(\[\{])|([\)\]\}])(\d*)/g;
    let match;
  
    while (match = regex.exec(formula)) {
      if (match[1]) {
        const element = match[1];
        const count = match[2] ? parseInt(match[2], 10) : 1;
        const top = stack[stack.length - 1];
        top[element] = (top[element] || 0) + count;
      } else if (match[3]) {
        stack.push({});
      } else if (match[4]) {
        const top = stack.pop();
        const multiplier = match[5] ? parseInt(match[5], 10) : 1;
        for (const element in top) {
          const count = top[element] * multiplier;
          const current = stack[stack.length - 1];
          current[element] = (current[element] || 0) + count;
        }
      }
    }
  
    return stack[0];
}