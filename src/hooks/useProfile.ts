import { PersonalInfo, SocialLinks, Stats } from '@/lib/types';
import { FirebaseServices } from '@/services/firebase';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function useProfile() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLinks | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfileData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [profileData, socialData, statsData] = await Promise.all([
        FirebaseServices.getProfile(),
        FirebaseServices.getSocialLinks(),
        FirebaseServices.getStats()
      ]);

      setPersonalInfo(profileData);
      setSocialLinks(socialData);
      setStats(statsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'error al cargar datos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  return useMemo(() => ({
    personalInfo,
    socialLinks,
    stats,
    loading,
    error
  }), [personalInfo, socialLinks, stats, loading, error]);
}
