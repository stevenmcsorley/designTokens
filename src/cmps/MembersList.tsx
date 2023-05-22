import React, { useEffect, useState } from "react";
import { searchMembers } from "../api/membersApi";
import * as designTokens from "../designTokens";

import styles from "./MembersList.module.css";

interface Member {
  value: {
    id: number;
    nameDisplayAs: string;
    latestParty: {
      name: string;
    };
    thumbnailUrl: string;
    // add other member properties here
  };
}

const MembersList: React.FC = () => {
  const [members, setMembers] = useState<Member[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    searchMembers(searchQuery)
      .then((data) => {
        setMembers(data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
    className={styles.container}
    style={{ padding: designTokens.spacing.padding.large }}
  >
    <h1
      className={styles.title}
      style={{
        color: designTokens.colors.primary,
        fontSize: designTokens.typography.fontSize.large,
      }}
    >
      Members List
    </h1>
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      className={styles.input}
      style={{
        borderRadius: designTokens.borders.radius.medium,
        borderWidth: designTokens.borders.width.thin,
        borderColor: designTokens.borders.color.secondary,
        padding: designTokens.spacing.padding.small,
        fontSize: designTokens.typography.fontSize.medium,
      }}
      placeholder="Search members"
    />
    <div className={styles.memberList}>
      {members &&
        members.map((member) => (
          <div
            key={member.value.id}
            className={styles.memberItem}
            style={{
              border: `1px solid ${designTokens.borders.color.secondary}`,
              borderRadius: designTokens.borders.radius.medium,
              padding: designTokens.spacing.padding.medium,
              textAlign: "center",
            }}
          >
            <h2
              className={styles.memberName}
              style={{
                color: designTokens.colors.primary,
                fontSize: designTokens.typography.fontSize.large,
                marginBottom: designTokens.spacing.margin.small,
              }}
            >
              {member.value.nameDisplayAs}
            </h2>
            <p
              className={styles.memberParty}
              style={{
                color: designTokens.colors.secondary,
                fontSize: designTokens.typography.fontSize.medium,
                marginBottom: designTokens.spacing.margin.small,
              }}
            >
              Party: {member.value.latestParty.name}
            </p>
            <img
              src={member.value.thumbnailUrl}
              alt={member.value.nameDisplayAs}
              className={styles.memberImage}
              style={{ borderRadius: designTokens.borders.radius.medium }}
            />
            {/* Add other member details here */}
          </div>
        ))}
    </div>
  </div>
  );
};

export default MembersList;
