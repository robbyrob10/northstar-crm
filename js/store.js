import { SEED_LEADS, SEED_NOTES, SEED_MESSAGES, SEED_FILES } from "./data.js";
const KEY = "northstar-crm-v1";
function seed() {
  return {
    leads: SEED_LEADS, notes: SEED_NOTES, messages: SEED_MESSAGES, files: SEED_FILES,
    activity: { harbor: [
      { title: "Email opened", detail: "Opened working-capital option twice", meta: "12m · Maria Alvarez" },
      { title: "Note added", detail: "Asked for a clearer picture of existing MCA payments", meta: "1h · Jordan Lee" },
      { title: "Statement reviewed", detail: "February 2026 statement reviewed", meta: "Yesterday · Jordan Lee" }
    ]},
    selectedId: "harbor", view: "leads"
  };
}
export function loadState() {
  try { const raw = localStorage.getItem(KEY); if (!raw) return seed(); return { ...seed(), ...JSON.parse(raw) }; }
  catch { return seed(); }
}
export function saveState(state) { localStorage.setItem(KEY, JSON.stringify(state)); }
export function resetState() { localStorage.removeItem(KEY); return seed(); }
