const { warn, message, danger } = require('danger')

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  warn('Please include a description of your PR changes.')
}

const { additions = 0, deletions = 0 } = danger.github.pr
message(`:tada: The PR added ${additions} and removed ${deletions} lines.`)

// Check that someone has been assigned to this PR
if (danger.github.pr.assignee === null) {
  warn('Please assign someone to merge this PR, and optionally include people who should review.')
}
