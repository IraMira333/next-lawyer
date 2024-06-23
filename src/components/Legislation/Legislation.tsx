"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Select from "react-select";
import { LawItem } from "./LawItem";
import { categoryNames } from "@/mockedData/categoryNameData";
import { LocaleType } from "../../../types/LocaleType";
import { legislationData } from "@/mockedData/legislation";

export const Legislation = () => {
  const t = useTranslations("Legislation");
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const options = categoryNames.map((category) => ({
    value: category.categoryName,
    label: category[locale as LocaleType],
  }));

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "300px",
      borderColor: "var(--nav-text-color)",
      "&:hover": { borderColor: "var(--accent-text-color)" },
      boxShadow: "none",
      paddingRight: "10px",
      borderRadius: "none",
      backgroundColor: "var(--accent-bgcolor:)",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "white",
      zIndex: 9999,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "var(--options-accent-color)"
        : "white",
      color: state.isSelected ? "white" : "var(--nav-text-color)",
      "&:hover": {
        backgroundColor: "var(--options-accent-color)",
        color: "var(--nav-text-color)",
      },
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color:
        state.isFocused || state.selectProps.menuIsOpen
          ? "var(--accent-text-color)"
          : "var(--nav-text-color)",
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      "&:hover": {
        color: "var(--accent-text-color)",
      },
    }),
  };

  const filteredData =
    selectedCategory === "all"
      ? legislationData
      : legislationData.filter(
          (item) => item.data.categoryName === selectedCategory
        );

  return (
    <section className="px-4 py-10 tab:px-5 tab:py-[60px] pc:px-10 pc:pt-[100px]">
      <h2 className="font-lora text-accent text-center mb-5 pc:mb-4 text-[28px] leading-8 tab:text-3xl pc:text-[40px] pc:leading-[48px] font-medium uppercase">
        {t("title")}
      </h2>
      <div className="tab:flex gap-4 mb-4 justify-center items-center">
        <h3 className="text-base leading-[21px] tab:text-lg font-semibold ">
          Фільтрувати по категоріям
        </h3>
        <Select
          styles={customStyles}
          value={options.find((option) => option.value === selectedCategory)}
          onChange={(selectedOption) =>
            setSelectedCategory(selectedOption?.value || "all")
          }
          options={options}
          isSearchable={false}
        />
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.data.id} className="flex gap-2 text-start mb-2">
            <LawItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
