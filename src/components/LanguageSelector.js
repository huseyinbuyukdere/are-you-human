import React from 'react';
import styles from "@/styles/Home.module.css";
import { languages } from '../constants';

const LanguageSelector = ({ currentLang, onLanguageChange }) => (
    <div className={styles.languageSelector}>
        <select value={currentLang} onChange={(e) => onLanguageChange(e.target.value)}>
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
        </select>
    </div>
);

export default LanguageSelector;