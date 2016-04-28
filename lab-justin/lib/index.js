'use strict'

module.exports = function(name){

	// const input = name || 'Justin';
  const input = process.argv[2]
  
  return 'hello ' + input;

};