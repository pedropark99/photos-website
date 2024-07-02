export default function is_string(obj) {
    if (typeof obj === 'string' || obj instanceof String)
        return true;
    return false;
}

export function is_mobile_context() {
    const width = window.screen.availWidth
    if (width < 767) {
        return true;
    }
    return false;
}

export function get_month_name(month_number, locale) {
    const mapping = {
        "Português": [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        ],
        "English": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
    }

    return mapping[locale][month_number + 1]
}