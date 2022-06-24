import { gql } from "@apollo/client/core";
export const schedule = gql`
  query NewSchedule($type: String, $status: String, $page: Int) {
    newSchedule(type: $type, status: $status, page: $page) {
      seriesName
      seriesID
      matchType
      league
      seriesView
      seriesAvailable
      matches {
        matchdate
        venue
        teamsWinProbability {
          homeTeamShortName
          homeTeamPercentage
          awayTeamShortName
          awayTeamPercentage
          tiePercentage
        }
        matchScore {
          teamShortName
          teamID
          teamFullName
          teamScore {
            inning
            inningNumber
            battingTeam
            runsScored
            wickets
            overs
            runRate
            battingSide
            teamID
            battingTeamShortName
            declared
            folowOn
          }
        }
        homeTeamName
        awayTeamName
      }
    }
  }
`;
