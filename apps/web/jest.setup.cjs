const React = require("react");
jest.mock("next-intl", () => ({
    useLocale: () => "en",
    useTranslations: (namespace) => (key) => {
        const mappings = {
            // ChildVaccinationTracker / VaccineHub
            "childTrackerTitle": "Child Vaccination Tracker",
            "childNameLabel": "Child name",
            "childDobLabel": "Date of birth",
            "childDobFutureError": "Date of birth cannot be in the future.",
            "childDefaultName": "Aarav",
            "completedStatus": "completedStatus",
            "dueStatus": "dueStatus",
            "overdueStatus": "overdueStatus",
            "upcomingStatus": "upcomingStatus",
            "markCompleteButton": "markCompleteButton",
            "noVaccineSelected": "noVaccineSelected",
            "commonEffects": "commonEffects",
            "severeReactions": "severeReactions",
            
            // Map
            "title": "Child Vaccination Tracker",
        };
        return mappings[key] || (namespace ? `${namespace}.${key}` : key);
    },
    useFormatter: () => ({
        dateTime: (date) => {
            const d = new Date(date);
            return `${d.getDate()} ${d.toLocaleString("en-US", { month: "short" })} ${d.getFullYear()}`;
        },
        number: (val) => String(val),
    }),
    NextIntlClientProvider: ({ children }) => React.createElement(React.Fragment, null, children),
}));
