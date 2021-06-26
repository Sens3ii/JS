const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
    sponsors = {
        cash: [40000, 5000, 30400, 12000],
        eu: ['SRL', 'PLO', 'J&K'],
        rus: ['RusAuto', 'SBO']
    };

const {
    cash,
    eu,
    rus
} = sponsors;

const employersNames = employers.filter(name => name).map(name => name.toLowerCase().trim());
const money = cash.reduce((sum, cash) => sum + cash);

function makeBusiness({
    owner = 'Sam',
    director = 'Victor',
    cash,
    emp
}) {
    let sumSponsors = [
        ...eu,
        ...rus,
        "unexpected sponsor"
    ];
    console.log(`
                We have a business. Owner: ${owner}, director: ${director}.
                Our budget: ${cash}.
                And our employers: ${emp}
                And we have a sponsors: 
                ${sumSponsors}
                Note. Be careful with "${eu[0]}". It's a huge risk.`);
}

makeBusiness({
    cash: money,
    emp: employersNames
});