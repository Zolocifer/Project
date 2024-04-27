package com.makeyourtrip.majorproject.repository;

import com.makeyourtrip.majorproject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long>
{
}
