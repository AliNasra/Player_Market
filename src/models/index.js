const sequelize = require('./database');
const Player = require('./Player');
const Team = require('./Team');
const Trainer = require('./Trainer');
const Match = require('./Match');
const Foul = require('./Foul');
const Goal = require('./Goal');
const Fan = require('./Fan');
const Ticket = require('./Ticket');
const Stadium = require('./Stadium');
const Owner = require('./Owner');
const League = require('./League');

// Define associations
Player.belongsTo(Team, { foreignKey: 'team_ID' });
Team.hasMany(Player, { foreignKey: 'team_ID' });

Trainer.belongsTo(Team, { foreignKey: 'team_ID' });
Team.hasMany(Trainer, { foreignKey: 'team_ID' });

Team.belongsTo(Owner, { foreignKey: 'owner_ID' });
Owner.hasMany(Team, { foreignKey: 'owner_ID' });

Team.belongsTo(Stadium, { foreignKey: 'stadium_ID' });
Stadium.hasMany(Team, { foreignKey: 'stadium_ID' });

Team.belongsTo(League, { foreignKey: 'league_ID' });
League.hasMany(Team, { foreignKey: 'league_ID' });

Match.belongsTo(Team, { foreignKey: 'team1_ID', as: 'team1' });
Match.belongsTo(Team, { foreignKey: 'team2_ID', as: 'team2' });

Goal.belongsTo(Player, { foreignKey: 'scorer_ID', as: 'scorer' });
Goal.belongsTo(Player, { foreignKey: 'assister_ID', as: 'assister' });
Goal.belongsTo(Match, { foreignKey: 'match_ID' });
Match.hasMany(Goal, { foreignKey: 'match_ID' });

Foul.belongsTo(Player, { foreignKey: 'fouler_ID', as: 'fouler' });
Foul.belongsTo(Player, { foreignKey: 'fouled_ID', as: 'fouled' });
Foul.belongsTo(Match, { foreignKey: 'match_ID' });
Match.hasMany(Foul, { foreignKey: 'match_ID' });

Ticket.belongsTo(Fan, { foreignKey: 'fan_ID' });
Fan.hasMany(Ticket, { foreignKey: 'fan_ID' });
Ticket.belongsTo(Match, { foreignKey: 'match_ID' });
Match.hasMany(Ticket, { foreignKey: 'match_ID' });

module.exports = {
  Player,
  Team,
  Trainer,
  Match,
  Foul,
  Goal,
  Fan,
  Ticket,
  Stadium,
  Owner,
  League,
};