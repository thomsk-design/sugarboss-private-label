"use client";

import { FINISHES, useBrand } from "./BrandContext";

type JarProps = {
  size: "sm" | "lg";
  fill: [string, string, string];
  level: number;
  grade: string;
  kicker?: string;
  floatClass: string;
};

function Jar({ size, fill, level, grade, kicker, floatClass }: JarProps) {
  const { brand, finish } = useBrand();
  const name = brand.trim() || "Your Brand";
  return (
    <div className={`jar jar--${size} ${floatClass}`} aria-hidden="true">
      <div className="jar__lid" />
      <div className="jar__glass">
        <div
          className="jar__paste"
          style={{
            height: `${level}%`,
            background: `linear-gradient(180deg, ${fill[0]}, ${fill[1]} 60%, ${fill[2]})`,
          }}
        />
        <div className="jar__shine" />
        <div
          className="jar__label"
          style={{ background: finish.bg, color: finish.ink, borderColor: finish.rule }}
        >
          {kicker && <div className="jar__kicker">{kicker}</div>}
          <div className="jar__brand">{name}</div>
          <div className="jar__rule" style={{ background: finish.rule }} />
          <div className="jar__grade">{grade}</div>
        </div>
      </div>
    </div>
  );
}

export default function JarStage() {
  const { brand, setBrand, finish, setFinish } = useBrand();

  return (
    <div className="stage">
      <div className="stage__jars">
        <div className="stage__shadow" aria-hidden="true" />
        <Jar size="sm" fill={["#F7D58C", "#E6AE4E", "#C98A2C"]} level={80} grade="SOFT PASTE" floatClass="float1" />
        <Jar
          size="lg"
          fill={["#EFBF62", "#D9962F", "#B4721B"]}
          level={82}
          kicker="PROFESSIONAL"
          grade="MEDIUM SUGAR PASTE"
          floatClass="float2"
        />
        <Jar size="sm" fill={["#DE9F43", "#BF7A22", "#94571A"]} level={78} grade="FIRM PASTE" floatClass="float3" />
      </div>

      <div className="tryit">
        <label className="tryit__label">
          Try it with your name
          <input
            className="tryit__input"
            type="text"
            value={brand}
            maxLength={18}
            placeholder="Your studio name"
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <div className="tryit__finishes" role="group" aria-label="Label finish">
          <span className="tryit__finish-label">Label finish</span>
          {FINISHES.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`chip ${finish.id === f.id ? "chip--on" : ""}`}
              aria-pressed={finish.id === f.id}
              onClick={() => setFinish(f)}
            >
              <span className="chip__dot" style={{ background: f.bg, borderColor: f.rule }} />
              {f.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
