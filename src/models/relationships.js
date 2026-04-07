// ER Model Relationships Mapping

// Entities and their relationships based on the ER diagram

const relationships = {
  Player: {
    attributes: ['player_ID', 'firstName', 'lastName', 'birthDate', 'rating', 'salary', 'password', 'email', 'isActivated', 'userName'],
    relationships: {
      joins: 'Team', // Player joins Team
      scores: 'Goal', // Player scores Goal
      makes: 'Foul' // Player makes Foul
    }
  },
  Team: {
    attributes: ['team_ID', 'name', 'stadium_ID', 'capacity', 'price', 'contractDate', 'contract_ID', 'owner_ID'],
    relationships: {
      hires: 'Trainer', // Team hires Trainer
      selects: 'Player', // Team selects Player
      plays: 'Match', // Team plays Match
      belongsTo: 'Owner', // Team belongs to Owner
      has: 'Stadium' // Team has Stadium
    }
  },
  Trainer: {
    attributes: ['trainer_ID', 'firstName', 'lastName', 'birthDate', 'rating', 'salary', 'password', 'email', 'isActivated', 'userName'],
    relationships: {
      hiredBy: 'Team' // Trainer hired by Team
    }
  },
  Match: {
    attributes: ['match_ID', 'time', 'referee', 'team1_ID', 'team2_ID'],
    relationships: {
      playedBy: 'Team', // Match played by Teams
      has: 'Goal', // Match has Goals
      has: 'Foul', // Match has Fouls
      has: 'Ticket' // Match has Tickets
    }
  },
  Foul: {
    attributes: ['foul_ID', 'fouler_ID', 'fouled_ID', 'match_ID', 'time'],
    relationships: {
      madeBy: 'Player', // Foul made by Player
      belongsTo: 'Match' // Foul belongs to Match
    }
  },
  Goal: {
    attributes: ['goal_ID', 'scorer_ID', 'assister_ID', 'match_ID', 'time'],
    relationships: {
      scoredBy: 'Player', // Goal scored by Player
      assistedBy: 'Player', // Goal assisted by Player
      belongsTo: 'Match' // Goal belongs to Match
    }
  },
  Fan: {
    attributes: ['fan_ID', 'password', 'email', 'isActivated', 'userName', 'lastName', 'firstName'],
    relationships: {
      buys: 'Ticket' // Fan buys Ticket
    }
  },
  Ticket: {
    attributes: ['ticket_ID', 'fan_ID', 'match_ID', 'seatNumber', 'firstName', 'price', 'time'],
    relationships: {
      boughtBy: 'Fan', // Ticket bought by Fan
      for: 'Match' // Ticket for Match
    }
  },
  Stadium: {
    attributes: ['stadium_ID', 'name', 'location', 'capacity'],
    relationships: {
      usedBy: 'Team' // Stadium used by Team
    }
  },
  Owner: {
    attributes: ['owner_ID', 'name', 'lastName', 'wealth'],
    relationships: {
      owns: 'Team' // Owner owns Team
    }
  },
  League: {
    attributes: ['league_ID', 'name'],
    relationships: {
      contains: 'Team' // League contains Teams
    }
  }
};

module.exports = relationships;